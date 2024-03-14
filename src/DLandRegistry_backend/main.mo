import Text "mo:base/Text";
import Array "mo:base/Array";
import List "mo:base/List";
import Bool "mo:base/Bool";
import Buffer "mo:base/Buffer";

actor {
  stable var notes: [Text]=[];
  public func addNote(note:Text){
    let theProjectsBuffer : Buffer.Buffer<Text> = Buffer.Buffer(notes.size());
    for (x in notes.vals()) {
    theProjectsBuffer.add(x);
    };
    theProjectsBuffer.add(note);
    notes:=theProjectsBuffer.toArray();
  };
  public query func get() : async [ Text]{
    return notes;
  };
};
