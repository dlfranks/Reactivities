using MediatR;
using Domain;
using Persistence;
using System;
using System.Threading.Tasks;
using System.Threading;
using Application.Core;

namespace Application.Activities
{
    public class Details
    {

        public class Query : IRequest<Result<Activity>>
        {
            public Guid id {get; set;}
        }
        public class Handler : IRequestHandler<Query, Result<Activity>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.id);
                return Result<Activity>.Success(activity);

            }
        }
    }
}