const asmTemplate = `<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="never" default-locale="en-US">
  <info>
    <title>American Society for Microbiology</title>
    <title-short>ASM</title-short>
    <id>http://www.zotero.org/styles/american-society-for-microbiology</id>
    <link href="http://www.zotero.org/styles/american-society-for-microbiology" rel="self"/>
    <link href="http://aem.asm.org/misc/journal-ita_org.dtl#03" rel="documentation"/>
    <author>
      <name>Julian Onions</name>
      <email>julian.onions@gmail.com</email>
    </author>
    <contributor>
      <name>Rintze Zelle</name>
      <uri>http://twitter.com/rintzezelle</uri>
    </contributor>
    <contributor>
      <name>Richard Karnesky</name>
      <email>karnesky+zotero@gmail.com</email>
      <uri>http://arc.nucapt.northwestern.edu/Richard_Karnesky</uri>
    </contributor>
    <contributor>
      <name>Charles Parnot</name>
      <uri>http://twitter.com/cparnot</uri>
      <email>charles.parnot@gmail.com</email>
    </contributor>
    <category citation-format="numeric"/>
    <category field="biology"/>
    <summary>Style for all American Society for Microbiology journals.</summary>
    <updated>2015-03-13T23:14:05+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <macro name="author">
    <names variable="author" suffix=".">
      <name sort-separator=" " initialize-with="" name-as-sort-order="all" delimiter=", " delimiter-precedes-last="always"/>
    </names>
  </macro>
  <macro name="issued">
    <group prefix=" " suffix=".">
      <choose>
        <if type="patent">
          <date variable="issued">
            <date-part name="month" suffix=" "/>
            <date-part name="year"/>
          </date>
        </if>
        <else>
          <date variable="issued">
            <date-part name="year"/>
          </date>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="chapter-specifics">
    <choose>
      <if type="chapter paper-conference" match="any">
        <label variable="page" form="short" plural="never" prefix=", " suffix=" "/>
        <text variable="page"/>
        <text term="in" text-case="capitalize-first" prefix=". " suffix=" " font-style="italic"/>
        <names variable="editor" delimiter=", " suffix=", ">
          <name initialize-with="" delimiter=", " name-as-sort-order="all" delimiter-precedes-last="always"/>
          <label form="short" prefix=" (" suffix=")"/>
        </names>
      </if>
    </choose>
  </macro>
  <macro name="patent-specifics">
    <text variable="number" prefix=". "/>
  </macro>
  <macro name="container-title">
    <choose>
      <if type="bill book chapter graphic legal_case legislation motion_picture paper-conference report song" match="any">
        <text variable="container-title"/>
      </if>
      <else>
        <text variable="container-title" form="short" strip-periods="true" prefix=". "/>
      </else>
    </choose>
  </macro>
  <macro name="edition">
    <choose>
      <if is-numeric="edition">
        <group delimiter=" " prefix=", ">
          <number variable="edition" form="ordinal"/>
          <text term="edition" form="short"/>
        </group>
      </if>
      <else>
        <text variable="edition" suffix="."/>
      </else>
    </choose>
  </macro>
  <macro name="publisher">
    <group delimiter=", " prefix=". ">
      <choose>
        <if type="article-journal article-magazine" match="none">
          <text variable="genre"/>
          <text variable="publisher"/>
          <text variable="publisher-place"/>
        </if>
      </choose>
    </group>
  </macro>
  <macro name="locators">
    <choose>
      <if type="article-journal">
        <group prefix=" " delimiter=":">
          <text variable="volume"/>
          <text variable="page"/>
        </group>
      </if>
    </choose>
  </macro>
  <citation collapse="citation-number">
    <sort>
      <key variable="citation-number"/>
    </sort>
    <layout prefix="(" suffix=")" delimiter=", ">
      <text variable="citation-number"/>
    </layout>
  </citation>
  <bibliography entry-spacing="1" line-spacing="2" second-field-align="flush">
    <layout suffix=".">
      <text variable="citation-number" suffix=". "/>
      <text macro="author"/>
      <text macro="issued"/>
      <text variable="title" prefix=" "/>
      <text macro="chapter-specifics"/>
      <text macro="patent-specifics"/>
      <text macro="container-title"/>
      <text macro="edition"/>
      <text macro="publisher"/>
      <text macro="locators"/>
    </layout>
  </bibliography>
</style>`;

export default asmTemplate;
