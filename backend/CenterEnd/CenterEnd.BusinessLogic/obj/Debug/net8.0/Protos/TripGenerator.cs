// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Protos/trip_generator.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace CenterEnd.Protos {

  /// <summary>Holder for reflection information generated from Protos/trip_generator.proto</summary>
  public static partial class TripGeneratorReflection {

    #region Descriptor
    /// <summary>File descriptor for Protos/trip_generator.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static TripGeneratorReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChtQcm90b3MvdHJpcF9nZW5lcmF0b3IucHJvdG8SDnRyaXBfZ2VuZXJhdG9y",
            "ImkKE0dlbmVyYXRlVHJpcFJlcXVlc3QSDwoHdXNlcl9pZBgBIAEoBRJBCg1j",
            "b25maWd1cmF0aW9uGAIgASgLMioudHJpcF9nZW5lcmF0b3IuVHJpcEdlbmVy",
            "YXRvckNvbmZpZ3VyYXRpb24iJwoUR2VuZXJhdGVUcmlwUmVzcG9uc2USDwoH",
            "dHJpcF9pZBgBIAEoBSJ5ChpUcmlwR2VuZXJhdG9yQ29uZmlndXJhdGlvbhIS",
            "CgpjYXRlZ29yaWVzGAEgAygJEhAKCG9yaWdpbllYGAIgASgJEg4KBnJhZGl1",
            "cxgDIAEoAhIQCghrZXl3b3JkcxgEIAMoCRITCgtwcmljZV9yYW5nZRgFIAEo",
            "CTJmCg1UcmlwR2VuZXJhdG9yElUKCEdlbmVyYXRlEiMudHJpcF9nZW5lcmF0",
            "b3IuR2VuZXJhdGVUcmlwUmVxdWVzdBokLnRyaXBfZ2VuZXJhdG9yLkdlbmVy",
            "YXRlVHJpcFJlc3BvbnNlQhOqAhBDZW50ZXJFbmQuUHJvdG9zYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::CenterEnd.Protos.GenerateTripRequest), global::CenterEnd.Protos.GenerateTripRequest.Parser, new[]{ "UserId", "Configuration" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::CenterEnd.Protos.GenerateTripResponse), global::CenterEnd.Protos.GenerateTripResponse.Parser, new[]{ "TripId" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::CenterEnd.Protos.TripGeneratorConfiguration), global::CenterEnd.Protos.TripGeneratorConfiguration.Parser, new[]{ "Categories", "OriginYX", "Radius", "Keywords", "PriceRange" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// The request message containing the user's name.
  /// </summary>
  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class GenerateTripRequest : pb::IMessage<GenerateTripRequest>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<GenerateTripRequest> _parser = new pb::MessageParser<GenerateTripRequest>(() => new GenerateTripRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<GenerateTripRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::CenterEnd.Protos.TripGeneratorReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GenerateTripRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GenerateTripRequest(GenerateTripRequest other) : this() {
      userId_ = other.userId_;
      configuration_ = other.configuration_ != null ? other.configuration_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GenerateTripRequest Clone() {
      return new GenerateTripRequest(this);
    }

    /// <summary>Field number for the "user_id" field.</summary>
    public const int UserIdFieldNumber = 1;
    private int userId_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int UserId {
      get { return userId_; }
      set {
        userId_ = value;
      }
    }

    /// <summary>Field number for the "configuration" field.</summary>
    public const int ConfigurationFieldNumber = 2;
    private global::CenterEnd.Protos.TripGeneratorConfiguration configuration_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::CenterEnd.Protos.TripGeneratorConfiguration Configuration {
      get { return configuration_; }
      set {
        configuration_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as GenerateTripRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(GenerateTripRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (UserId != other.UserId) return false;
      if (!object.Equals(Configuration, other.Configuration)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (UserId != 0) hash ^= UserId.GetHashCode();
      if (configuration_ != null) hash ^= Configuration.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (UserId != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(UserId);
      }
      if (configuration_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Configuration);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (UserId != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(UserId);
      }
      if (configuration_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Configuration);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (UserId != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(UserId);
      }
      if (configuration_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Configuration);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(GenerateTripRequest other) {
      if (other == null) {
        return;
      }
      if (other.UserId != 0) {
        UserId = other.UserId;
      }
      if (other.configuration_ != null) {
        if (configuration_ == null) {
          Configuration = new global::CenterEnd.Protos.TripGeneratorConfiguration();
        }
        Configuration.MergeFrom(other.Configuration);
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            UserId = input.ReadInt32();
            break;
          }
          case 18: {
            if (configuration_ == null) {
              Configuration = new global::CenterEnd.Protos.TripGeneratorConfiguration();
            }
            input.ReadMessage(Configuration);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            UserId = input.ReadInt32();
            break;
          }
          case 18: {
            if (configuration_ == null) {
              Configuration = new global::CenterEnd.Protos.TripGeneratorConfiguration();
            }
            input.ReadMessage(Configuration);
            break;
          }
        }
      }
    }
    #endif

  }

  /// <summary>
  /// The response message containing the greetings.
  /// </summary>
  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class GenerateTripResponse : pb::IMessage<GenerateTripResponse>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<GenerateTripResponse> _parser = new pb::MessageParser<GenerateTripResponse>(() => new GenerateTripResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<GenerateTripResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::CenterEnd.Protos.TripGeneratorReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GenerateTripResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GenerateTripResponse(GenerateTripResponse other) : this() {
      tripId_ = other.tripId_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public GenerateTripResponse Clone() {
      return new GenerateTripResponse(this);
    }

    /// <summary>Field number for the "trip_id" field.</summary>
    public const int TripIdFieldNumber = 1;
    private int tripId_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int TripId {
      get { return tripId_; }
      set {
        tripId_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as GenerateTripResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(GenerateTripResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (TripId != other.TripId) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (TripId != 0) hash ^= TripId.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (TripId != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(TripId);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (TripId != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(TripId);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (TripId != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(TripId);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(GenerateTripResponse other) {
      if (other == null) {
        return;
      }
      if (other.TripId != 0) {
        TripId = other.TripId;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            TripId = input.ReadInt32();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            TripId = input.ReadInt32();
            break;
          }
        }
      }
    }
    #endif

  }

  /// <summary>
  /// The Configuration message definition.
  /// </summary>
  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class TripGeneratorConfiguration : pb::IMessage<TripGeneratorConfiguration>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<TripGeneratorConfiguration> _parser = new pb::MessageParser<TripGeneratorConfiguration>(() => new TripGeneratorConfiguration());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<TripGeneratorConfiguration> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::CenterEnd.Protos.TripGeneratorReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TripGeneratorConfiguration() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TripGeneratorConfiguration(TripGeneratorConfiguration other) : this() {
      categories_ = other.categories_.Clone();
      originYX_ = other.originYX_;
      radius_ = other.radius_;
      keywords_ = other.keywords_.Clone();
      priceRange_ = other.priceRange_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TripGeneratorConfiguration Clone() {
      return new TripGeneratorConfiguration(this);
    }

    /// <summary>Field number for the "categories" field.</summary>
    public const int CategoriesFieldNumber = 1;
    private static readonly pb::FieldCodec<string> _repeated_categories_codec
        = pb::FieldCodec.ForString(10);
    private readonly pbc::RepeatedField<string> categories_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<string> Categories {
      get { return categories_; }
    }

    /// <summary>Field number for the "originYX" field.</summary>
    public const int OriginYXFieldNumber = 2;
    private string originYX_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string OriginYX {
      get { return originYX_; }
      set {
        originYX_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "radius" field.</summary>
    public const int RadiusFieldNumber = 3;
    private float radius_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public float Radius {
      get { return radius_; }
      set {
        radius_ = value;
      }
    }

    /// <summary>Field number for the "keywords" field.</summary>
    public const int KeywordsFieldNumber = 4;
    private static readonly pb::FieldCodec<string> _repeated_keywords_codec
        = pb::FieldCodec.ForString(34);
    private readonly pbc::RepeatedField<string> keywords_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<string> Keywords {
      get { return keywords_; }
    }

    /// <summary>Field number for the "price_range" field.</summary>
    public const int PriceRangeFieldNumber = 5;
    private string priceRange_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string PriceRange {
      get { return priceRange_; }
      set {
        priceRange_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as TripGeneratorConfiguration);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(TripGeneratorConfiguration other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!categories_.Equals(other.categories_)) return false;
      if (OriginYX != other.OriginYX) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.Equals(Radius, other.Radius)) return false;
      if(!keywords_.Equals(other.keywords_)) return false;
      if (PriceRange != other.PriceRange) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= categories_.GetHashCode();
      if (OriginYX.Length != 0) hash ^= OriginYX.GetHashCode();
      if (Radius != 0F) hash ^= pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.GetHashCode(Radius);
      hash ^= keywords_.GetHashCode();
      if (PriceRange.Length != 0) hash ^= PriceRange.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      categories_.WriteTo(output, _repeated_categories_codec);
      if (OriginYX.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(OriginYX);
      }
      if (Radius != 0F) {
        output.WriteRawTag(29);
        output.WriteFloat(Radius);
      }
      keywords_.WriteTo(output, _repeated_keywords_codec);
      if (PriceRange.Length != 0) {
        output.WriteRawTag(42);
        output.WriteString(PriceRange);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      categories_.WriteTo(ref output, _repeated_categories_codec);
      if (OriginYX.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(OriginYX);
      }
      if (Radius != 0F) {
        output.WriteRawTag(29);
        output.WriteFloat(Radius);
      }
      keywords_.WriteTo(ref output, _repeated_keywords_codec);
      if (PriceRange.Length != 0) {
        output.WriteRawTag(42);
        output.WriteString(PriceRange);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      size += categories_.CalculateSize(_repeated_categories_codec);
      if (OriginYX.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(OriginYX);
      }
      if (Radius != 0F) {
        size += 1 + 4;
      }
      size += keywords_.CalculateSize(_repeated_keywords_codec);
      if (PriceRange.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(PriceRange);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(TripGeneratorConfiguration other) {
      if (other == null) {
        return;
      }
      categories_.Add(other.categories_);
      if (other.OriginYX.Length != 0) {
        OriginYX = other.OriginYX;
      }
      if (other.Radius != 0F) {
        Radius = other.Radius;
      }
      keywords_.Add(other.keywords_);
      if (other.PriceRange.Length != 0) {
        PriceRange = other.PriceRange;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            categories_.AddEntriesFrom(input, _repeated_categories_codec);
            break;
          }
          case 18: {
            OriginYX = input.ReadString();
            break;
          }
          case 29: {
            Radius = input.ReadFloat();
            break;
          }
          case 34: {
            keywords_.AddEntriesFrom(input, _repeated_keywords_codec);
            break;
          }
          case 42: {
            PriceRange = input.ReadString();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            categories_.AddEntriesFrom(ref input, _repeated_categories_codec);
            break;
          }
          case 18: {
            OriginYX = input.ReadString();
            break;
          }
          case 29: {
            Radius = input.ReadFloat();
            break;
          }
          case 34: {
            keywords_.AddEntriesFrom(ref input, _repeated_keywords_codec);
            break;
          }
          case 42: {
            PriceRange = input.ReadString();
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code
