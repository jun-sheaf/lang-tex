import { TagSystem } from "@codemirror/next/highlight";

const customFlags = [
  "semistrong",
  "noemphasis",
  "smallcap",
  "underline",
  "normal"
];

/**
 * The TeX tag system is based on the default one. We attempt to stay as close as possible to default tags, only straying away when required.
 */
export const TeXTagSystem = new TagSystem({
  flags: [
    "invalid",
    "meta",
    "standard",
    "definition",
    "constant",
    "local",
    "control",
    "link",
    "strong",
    "emphasis",
    "monospace",
    "changed",
    "inserted",
    "deleted"
  ].concat(customFlags),
  subtypes: 7,
  types: [
    "comment",
    "lineComment=comment",
    "blockComment=comment",
    "docComment=comment",
    "name",
    "variableName=name",
    "typeName=name",
    "propertyName=name",
    "className=name",
    "labelName=name",
    "functionName=name",
    "namespace=name",
    "literal",
    "string=literal",
    "docString=string",
    "character=string",
    "number=literal",
    "integer=number",
    "float=number",
    "bool=literal",
    "regexp=literal",
    "escape=literal",
    "color=literal",
    "content",
    "heading=content",
    "list=content",
    "quote=content",
    "keyword",
    "self=keyword",
    "null=keyword",
    "atom=keyword",
    "unit=keyword",
    "modifier=keyword",
    "operatorKeyword=keyword",
    "operator",
    "derefOperator=operator",
    "arithmeticOperator=operator",
    "logicOperator=operator",
    "bitwiseOperator=operator",
    "compareOperator=operator",
    "updateOperator=operator",
    "typeOperator=operator",
    "punctuation",
    "separator=punctuation",
    "bracket=punctuation",
    "angleBracket=bracket",
    "squareBracket=bracket",
    "paren=bracket",
    "brace=bracket"
  ]
});