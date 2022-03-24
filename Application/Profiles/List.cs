using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles
{
    public class List
    {
        public class Query : IRequest<Result<List<UserActivityDto>>>
        {
            public string username { get; set; }
            public string predicate { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<List<UserActivityDto>>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IUserAccessor userAccessor, IMapper mapper)
            {
                _context = context;
                _userAccessor = userAccessor;
                _mapper = mapper;
            }

            public async Task<Result<List<UserActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var userActivities = new List<UserActivityDto>();

                var query = _context.ActivityAttendees.Include(q => q.Activity).Where(q => q.AppUser.UserName == request.username);

                switch (request.predicate)
                {
                    case "future":
                        userActivities = await query.Where(q =>
                            q.Activity.Date >= DateTime.Now)
                            .ProjectTo<UserActivityDto>(_mapper.ConfigurationProvider)
                            .ToListAsync();
                        break;
                    case "past":
                        userActivities = await query.Where(q =>
                            q.Activity.Date < DateTime.Now)
                            .ProjectTo<UserActivityDto>(_mapper.ConfigurationProvider)
                            .ToListAsync();
                        break;
                    case "isHost":
                        userActivities = await query.Where(q =>
                            q.IsHost)
                            .ProjectTo<UserActivityDto>(_mapper.ConfigurationProvider)
                            .ToListAsync();
                        break;
                    default:
                        userActivities = await query
                            .ProjectTo<UserActivityDto>(_mapper.ConfigurationProvider)
                            .ToListAsync();
                        break;
                }


                return Result<List<UserActivityDto>>.Success(userActivities);
            }
        }
    }
}