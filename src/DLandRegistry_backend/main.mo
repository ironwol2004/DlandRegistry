import Text "mo:base/Text";
import Array "mo:base/Array";
import List "mo:base/List";
import Bool "mo:base/Bool";
import Buffer "mo:base/Buffer";
import Nat "mo:base/Nat";
actor {
  type property={name:Text;
    aadhar:Text;
    address:Text;
    id:Text;
    city:Text;
    state:Text;
    code:Text};
  stable var bps: [property]=[];
  public func add(note:property){
    let theProjectsBuffer : Buffer.Buffer<property> = Buffer.Buffer(bps.size());
    for (x in bps.vals()) {
    theProjectsBuffer.add(x);
    };
    theProjectsBuffer.add(note);
    bps:=theProjectsBuffer.toArray();
  };
  public query func get() : async [property]{
    return bps;
  };
  public func empty(){
    bps:=[];
  }
};
