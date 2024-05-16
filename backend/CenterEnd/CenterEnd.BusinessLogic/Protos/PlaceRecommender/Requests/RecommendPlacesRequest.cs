using CenterEnd.BusinessLogic.DTOs;
using ProtoBuf;

namespace CenterEnd.BusinessLogic.Protos.Requests;

[ProtoContract]
public class RecommendPlacesRequest // From here to Microservice
{
    [ProtoMember(1)]
    public required int UserId { get; set; }
    [ProtoMember(2)]
    public required Configuration Configuration { get; set; }
}
