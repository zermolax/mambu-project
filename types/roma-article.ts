export interface RomaArticle {
    id: number;
    attributes: {
      titlu: string;
      imagine_principala: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      categorie: string;
      descriere: string;
      continut: ContentBlock[];
      galerie_imagini: {
        data: Array<{
          attributes: {
            url: string;
          };
        }>;
      };
      produse_asociate: Array<{
        titlu: string;
        descriere: string;
        imagine: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        link: string;
      }>;
      tags: string[];
    };
  }
  
  export interface ContentBlock {
    __component: 'continut.continut';
    id: number;
    text: string | RichTextBlock[];
    imagine?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    citat?: Array<{
      id: number;
      text: string;
      autor: string;
    }>;
  }
  
  interface RichTextBlock {
    type: 'heading' | 'paragraph' | string;
    children: Array<{
      type: string;
      text: string;
      bold?: boolean;
    }>;
    level?: number;
  }