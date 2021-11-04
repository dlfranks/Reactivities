<<<<<<< HEAD
using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
=======
using MediatR;
using Domain;
using Persistence;
using System;
using System.Threading.Tasks;
using System.Threading;
using Application.Core;
>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a

namespace Application.Activities
{
    public class Details
    {
<<<<<<< HEAD
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                return activity;
=======

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

>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a
            }
        }
    }
}