const cellTemplate = `<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" version="1.0" class="in-text" default-locale="en-US" demote-non-dropping-particle="sort-only" page-range-format="expanded">
  <info>
    <title>Cell</title>
    <id>http://www.zotero.org/styles/cell</id>
    <link href="http://www.zotero.org/styles/cell" rel="self"/>
    <link href="http://www.cell.com/authors" rel="documentation"/>
    <author>
      <name>Adam Mark</name>
      <email>a.mark@uoguelph.ca</email>
    </author>
    <contributor>
      <name>Julian Onions</name>
      <email>julian.onions@gmail.com</email>
    </contributor>
    <contributor>
      <name>Aurimas Vinckevicius</name>
      <email>aurimas.dev@gmail.com</email>
    </contributor>
    <category citation-format="author-date"/>
    <category field="biology"/>
    <issn>0092-8674</issn>
    <eissn>1097-4172</eissn>
    <summary>The Cell journal style. Original by Julian Onions.</summary>
    <updated>2013-01-26T22:06:38+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <macro name="author-short">
    <names variable="author">
      <name form="short" and="text"/>
    </names>
  </macro>
  <macro name="author-count">
    <names variable="author">
      <name form="count"/>
    </names>
  </macro>
  <macro name="author">
    <names variable="author">
      <name name-as-sort-order="all" initialize-with="." and="text" delimiter-precedes-last="always"/>
    </names>
  </macro>
  <macro name="issued">
    <date variable="issued">
      <date-part name="year"/>
    </date>
  </macro>
  <macro name="publisher">
    <group prefix="(" delimiter=": " suffix=")">
      <text variable="publisher-place"/>
      <text variable="publisher"/>
    </group>
  </macro>
  <macro name="editor">
    <names variable="editor">
      <name initialize-with="." and="text" delimiter-precedes-last="always"/>
      <label form="short" prefix=", "/>
    </names>
  </macro>
  <citation et-al-min="3" et-al-use-first="1" disambiguate-add-year-suffix="true" collapse="year">
    <sort>
      <key macro="author-short" names-min="1" names-use-first="1"/>
      <key macro="author-count" names-min="3" names-use-first="3"/>
      <key macro="author" names-min="3" names-use-first="1"/>
      <key macro="issued"/>
      <key variable="title"/>
    </sort>
    <layout prefix="(" suffix=")" delimiter="; ">
      <group delimiter=", ">
        <text macro="author-short"/>
        <text macro="issued"/>
      </group>
    </layout>
  </citation>
  <bibliography et-al-min="11" et-al-use-first="10">
    <sort>
      <key macro="author-short" names-min="1" names-use-first="1"/>
      <key macro="author-count" names-min="3" names-use-first="3"/>
      <key macro="author" names-min="3" names-use-first="1"/>
      <key macro="issued"/>
    </sort>
    <layout suffix=".">
      <group delimiter=" ">
        <text macro="author"/>
        <text macro="issued" prefix="(" suffix=")."/>
        <choose>
          <if type="article article-magazine article-newspaper article-journal review" match="any">
            <text variable="title" suffix="."/>
            <text variable="container-title" form="short" text-case="title"/>
            <group delimiter=", ">
              <text variable="volume" font-style="italic"/>
              <text variable="page"/>
            </group>
          </if>
          <else-if type="chapter paper-conference" match="any">
            <text variable="title" suffix="."/>
            <text variable="container-title" prefix="In " suffix="," text-case="title"/>
            <text macro="editor"/>
            <text macro="publisher" suffix=","/>
            <label variable="page" form="short"/>
            <text variable="page"/>
          </else-if>
          <else-if type="thesis">
            <text variable="title" suffix="."/>
            <text variable="genre" suffix="."/>
            <text variable="publisher"/>
          </else-if>
          <else>
            <text variable="title"/>
            <text macro="publisher"/>
          </else>
        </choose>
      </group>
    </layout>
  </bibliography>
</style>`;

export default cellTemplate;
