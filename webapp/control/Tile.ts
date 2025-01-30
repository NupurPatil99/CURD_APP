import Contorl from "sap/ui/core/Contorl";

export default class Tile extends Contorl {
  static readonly metadata  = {
    properties: {
      "title": { type: "string", defaultValue: "" },
      "icon": { type: "string", defaultValue: "" },
      "image": { type: "string", defaultValue: "" },
      "text": { type: "string", defaultValue: "" }
  },
    events: { "press": {} }
}
   renderer ={
    apiVersion:2,
    render :(oRm: RenderingManager , oControl:Tile) => {
        oRm.openStart("div", oControl)
          .class("sapUiTile")
          .openEnd();
          .close("div");
    }
   }
}