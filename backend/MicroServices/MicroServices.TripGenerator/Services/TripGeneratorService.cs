using Grpc.Core;

namespace MicroServices.TripGenerator;

public class TripGeneratorService : TripGenerator.TripGeneratorBase
{
    public override Task<GenerateTripResponse> Generate(GenerateTripRequest request, ServerCallContext context)
    {


        return Task.FromResult(new GenerateTripResponse
        {
            TripId = 123456789,
        });
    }
}
