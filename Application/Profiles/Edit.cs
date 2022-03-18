using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Profile Profile { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var username =  _userAccessor.GetUsername();
                if(username == null) return null;
                var user = await _context.Users.SingleOrDefaultAsync(q => q.UserName == username);
                if(user == null) return null;
                user.DisplayName = request.Profile.DisplayName;
                user.Bio = request.Profile.Bio;
                var result = await _context.SaveChangesAsync() > 0;
                if(!result) Result<Unit>.Failure("Failed to update a user");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}