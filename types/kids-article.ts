export interface KidsArticle {
    attributes: {
      titlu?: string;
      slug?: string;
      seo?: {
        metaTitle?: string;
        metaDescription?: string;
      };
      SharedImage?: {
        media?: {
          data?: {
            attributes?: {
              url?: string;
            };
          };
        };
      };
      keywords?: string;
      preventindexing?: boolean;
      categorie?: string;
      descriere?: string;
      continut?: ContentBlock[];
      tags?: string[];
    };
  }
  
  export interface ContentBlock {
    id: string;
    text?: string | RichTextContent[];
    refren?: string;
    imagine?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
  }
  
  interface RichTextContent {
    type: 'paragraph' | 'heading';
    children: { text: string }[];
    level?: number; // pentru headings
  }