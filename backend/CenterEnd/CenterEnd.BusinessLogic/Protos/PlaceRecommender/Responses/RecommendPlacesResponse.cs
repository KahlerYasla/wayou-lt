using ProtoBuf;

namespace CenterEnd.BusinessLogic.Protos.Responses;

[ProtoContract]
public class RecommendPlacesResponse // From microservice to here
{
    [ProtoMember(1)]
    public List<int>? PlaceIds { get; set; }
}
