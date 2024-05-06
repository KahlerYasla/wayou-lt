using ProtoBuf;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Requests;

[ProtoContract]
public class RecommendPlacesRequest
{
    [ProtoMember(1)]
    public List<Place>? Places { get; set; }
}
