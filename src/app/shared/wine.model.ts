export interface Wine {
    id: number;
    name?: string;
    smallDescription?: string;
    description?: string;
    capacity?: string;
    price?: number;
    color?: string;
    type?: string;
    imageBlob?: File;
    imageUrl?: string;
  }