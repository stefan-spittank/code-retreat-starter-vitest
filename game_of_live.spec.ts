import { describe, expect, it } from "vitest";
import {cell} from "./gameOfLive";

describe("Game Of Live", () => {
  it("should run a test", () => {
    expect(1).toBe(1);
  });

  it("a cell should have a living state", ()=>{
    expect(cell.state).toBe("living")
  });

  
});
