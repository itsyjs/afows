interface NestedObject {
  [key: string]: string | NestedObject;
}

export function process(object: NestedObject): string[];
