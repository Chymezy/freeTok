import { describe, it, expect, vi, beforeEach } from "vitest";
import { backendService } from "../../src/services/backendService";
import { backend } from "../../../declarations/backend";

// Mock the backend canister
vi.mock("../../../declarations/backend", () => ({
  backend: {
    getFeed: vi.fn().mockResolvedValue([]),
  },
}));

describe("backendService", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  describe("getFeed", () => {
    it("should call backend.getFeed", async () => {
      // Execute
      const result = await backendService.getFeed();

      // Assert
      expect(backend.getFeed).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });
});
