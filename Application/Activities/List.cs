<<<<<<< HEAD
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
=======
using MediatR;
using Domain;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using Application.Core;
>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a

namespace Application.Activities
{
    public class List
    {
<<<<<<< HEAD
        public class Query : IRequest<List<Activity>> { }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {

=======
        public class Query : IRequest<Result<List<Activity>>>
        {

        }

        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;


            }
<<<<<<< HEAD

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activities = await _context.Activities.ToListAsync();

                return activities;
=======
            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {

                return Result<List<Activity>>.Success(await _context.Activities.ToListAsync(cancellationToken));
>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a
            }
        }
    }
}