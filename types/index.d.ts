declare global {
  export type Source = {
    id: string;
    name: string;
  };

  export type News = {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  };
}

export {};