using MediatR;
using Domain;
using Persistence;
using System;
using System.Threading.Tasks;
using System.Threading;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace Application.Activities
{
    public class Details
    {

        public class Query : IRequest<Result<ActivityDto>>
        {
            public Guid id {get; set;}
        }
        public class Handler : IRequestHandler<Query, Result<ActivityDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<ActivityDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities
                    .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.id);
                return Result<ActivityDto>.Success(activity);

            }
        }
    }
}