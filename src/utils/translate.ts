import translations from "@/message/todo-translation.json";

export function translateTitle(title: string): string {
  return (translations as Record<string, string>)[title] || title;
}
