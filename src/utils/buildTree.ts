import { ProjectDetailContent } from "@/mocks/projects/types";

export function buildContentTree(items: ProjectDetailContent[]): ProjectDetailContent[] {
  const map = new Map<string, ProjectDetailContent & { children?: ProjectDetailContent[] }>();
  const roots: ProjectDetailContent[] = [];

  // 모든 항목을 맵에 저장
  items.forEach(item => map.set(item.id, { ...item, children: [] }));

  // 부모-자식 관계 연결
  items.forEach(item => {
    const node = map.get(item.id)!;
    if (item.parentId === null) {
      roots.push(node);
    } else {
      map.get(item.parentId)?.children?.push(node);
    }
  });

  // 정렬
  const sortByOrder = (arr: ProjectDetailContent[]) => 
    arr.sort((a, b) => a.order - b.order);

  return sortByOrder(roots);
}