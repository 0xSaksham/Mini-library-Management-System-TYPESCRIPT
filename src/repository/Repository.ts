export class Repository<T extends { id: number , name: string}> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  findByName(name: string): T | undefined {
    return this.items.find((item) => item.name == name);
  }
}
