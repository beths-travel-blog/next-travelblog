import * as React from "react";
import styled from "styled-components";

interface SafeHtmlProps {
  tagsToRemove?: string[];
  removeTagsAndContent?: boolean;
  onTag?: (tag: string, html: string, options: OnTagOptions) => string | null;
  __dangerouslyAllowedTags?: string[];
  __dangerouslyAllowedAttrs?: {
    [key: string]: string[];
  };
  className?: string;
  "data-testid"?: string;
  renderedAs?: "p" | "h1" | "h2";
}

export interface OnTagOptions {
  isWhite: boolean;
  isClosing: boolean;
  position: number;
  sourcePosition: number;
}

const StyledText = styled.div`
  ul {
    list-style: initial;
    margin-top: 24px;
    margin-left: 16px;
  }

  table {
    display: block;
    margin-top: 56px;
    width: 100%;
    overflow-x: auto;

    thead {
      text-decoration: bold;
    }

    td {
      padding: 8px;
      border: 1px solid grey;
    }
  }
`;

const SafeHtml = React.forwardRef(
  (props: SafeHtmlProps & { content: string }, ref?: any) => {
    return (
      <StyledText
        ref={ref}
        dangerouslySetInnerHTML={{ __html: props.content }}
        className={props.className}
        data-testid={props["data-testid"] || "styled-text"}
        as={props.renderedAs}
      />
    );
  }
);

export default SafeHtml;
