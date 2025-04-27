import { documentsSlice, DocumentItem, reorderDocuments } from "../features/documents/documentsSlice";

test("reorderDocuments changes order", () => {
  const initial: DocumentItem[] = [
    { id: 1, name: "doc1", color: "#f00" },
    { id: 2, name: "doc2", color: "#0f0" },
    { id: 3, name: "doc3", color: "#00f" },
  ];
  const state = { documents: initial, activeId: null, analyzing: false };
  const newOrder = [initial[2], initial[0], initial[1]];
  const next = documentsSlice.reducer(state, reorderDocuments(newOrder));
  expect(next.documents[0].id).toBe(3);
});
