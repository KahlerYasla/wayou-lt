// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Protos/place_recommender.proto
// </auto-generated>
#pragma warning disable 0414, 1591, 8981, 0612
#region Designer generated code

using grpc = global::Grpc.Core;

namespace MicroServices.PlaceRecommender {
  /// <summary>
  /// The greeting service definition.
  /// </summary>
  public static partial class PlaceRecommender
  {
    static readonly string __ServiceName = "place_recommender.PlaceRecommender";

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::MicroServices.PlaceRecommender.RecommendPlacesRequest> __Marshaller_place_recommender_RecommendPlacesRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::MicroServices.PlaceRecommender.RecommendPlacesRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::MicroServices.PlaceRecommender.RecommendPlacesResponse> __Marshaller_place_recommender_RecommendPlacesResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::MicroServices.PlaceRecommender.RecommendPlacesResponse.Parser));

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::MicroServices.PlaceRecommender.RecommendPlacesRequest, global::MicroServices.PlaceRecommender.RecommendPlacesResponse> __Method_Recommend = new grpc::Method<global::MicroServices.PlaceRecommender.RecommendPlacesRequest, global::MicroServices.PlaceRecommender.RecommendPlacesResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Recommend",
        __Marshaller_place_recommender_RecommendPlacesRequest,
        __Marshaller_place_recommender_RecommendPlacesResponse);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::MicroServices.PlaceRecommender.PlaceRecommenderReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of PlaceRecommender</summary>
    [grpc::BindServiceMethod(typeof(PlaceRecommender), "BindService")]
    public abstract partial class PlaceRecommenderBase
    {
      /// <summary>
      /// Sends a greeting
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>The response to send back to the client (wrapped by a task).</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::MicroServices.PlaceRecommender.RecommendPlacesResponse> Recommend(global::MicroServices.PlaceRecommender.RecommendPlacesRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(PlaceRecommenderBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_Recommend, serviceImpl.Recommend).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, PlaceRecommenderBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_Recommend, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::MicroServices.PlaceRecommender.RecommendPlacesRequest, global::MicroServices.PlaceRecommender.RecommendPlacesResponse>(serviceImpl.Recommend));
    }

  }
}
#endregion
