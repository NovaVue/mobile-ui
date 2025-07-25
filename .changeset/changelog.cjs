// import { getReleaseLine, getDependencyReleaseLine } from '@changesets/changelog-git'
// export {
//   getReleaseLine,
//   getDependencyReleaseLine
// }
const ChangelogFunctions = require('@changesets/changelog-git')
function getReleaseLine(changeset, _type) {
  const [firstLine, ...futureLines] = changeset.summary
    .split("\n")
    .map((l) => l.trimRight());

  let returnVal = `- ${firstLine}(${changeset.commit
    ? `${changeset.commit.slice(0, 7)}` :
    ""})`;

  if (futureLines.length > 0) {
    returnVal += `\n${futureLines.map((l) => `  ${l}`).join("\n")}`;
  }

  return returnVal;
}
// function getReleaseLine(changeset, _type) {
//   const summaryList = changeset.summary
//     .split("\n")
//     .map((l) => l.trimRight());
//   const commitHash = changeset.commit ? `(${changeset.commit.slice(0, 7)})` : ''
//   let returnVal = ''
//   console.log('summaryList', summaryList)
//   if (summaryList.length > 0) {
//     returnVal = summaryList.map(v => `- ${v}${commitHash}\n`).join('')
//   }
//   console.log('returnVal', returnVal)
//   return returnVal;
// }

module.exports = {
  default: {
    ...ChangelogFunctions.default,
    getReleaseLine
    // getReleaseLine: function (changeset, options, changelogOpts) {
    //   console.log('changeset', changeset)
    //   console.log('options', options)
    //   console.log('changelogOpts', changelogOpts)
    //   const { summary, commit, releases } = changeset;

    //   // 分组变更
    //   const groups = {
    //     feat: [],
    //     fix: [],
    //     docs: [],
    //     other: []
    //   };

    //   if (summary.startsWith("feat:")) {
    //     groups.feat.push(summary);
    //   } else if (summary.startsWith("fix:")) {
    //     groups.fix.push(summary);
    //   } else if (summary.startsWith("docs:")) {
    //     groups.docs.push(summary);
    //   } else {
    //     groups.other.push(summary);
    //   }

    //   // 获取发布信息
    //   // const packageName = releases[0].name;
    //   // const version = releases[0].newVersion;
    //   // const releaseDate = new Date().toISOString().split("T")[0];

    //   // 生成 CHANGELOG 条目
    //   let changelogEntry = ``;
    //   const commitStr = commit.slice(0, 7)
    //   if (groups.feat.length > 0) {
    //     // changelogEntry += "#### Features\n\n";
    //     groups.feat.forEach((item) => (changelogEntry += `- ${item}(${commitStr})`));
    //   }

    //   if (groups.fix.length > 0) {
    //     // changelogEntry += "#### Bug Fixes\n\n";
    //     groups.fix.forEach((item) => (changelogEntry += `- ${item}(${commitStr})`));
    //   }
    //   if (groups.docs.length > 0) {
    //     // changelogEntry += "#### Bug Fixes\n\n";
    //     groups.docs.forEach((item) => (changelogEntry += `- ${item}(${commitStr})`));
    //   }

    //   if (groups.other.length > 0) {
    //     // changelogEntry += "#### 其他变更\n\n";
    //     groups.other.forEach((item) => (changelogEntry += `- ${item}(${commitStr})`));
    //   }

    //   console.log('changelogEntry', changelogEntry)

    //   return changelogEntry;
    // }
  },

}
// module.exports = function (changeset, options) {
//   const { summary, commit, releases } = changeset;

//   // 分组变更
//   const groups = {
//     feat: [],
//     fix: [],
//     docs: [],
//     other: [],
//   };

//   if (summary.startsWith("feat:")) {
//     groups.feat.push(summary);
//   } else if (summary.startsWith("fix:")) {
//     groups.fix.push(summary);
//   } else if (summary.startsWith("docs:")) {
//     groups.docs.push(summary);
//   } else {
//     groups.other.push(summary);
//   }

//   // 获取发布信息
//   const packageName = releases[0].name;
//   const version = releases[0].newVersion;
//   const releaseDate = new Date().toISOString().split("T")[0];

//   // 生成 CHANGELOG 条目
//   let changelogEntry = `## ${packageName}@${version} (${releaseDate})\n\n`;

//   if (groups.feat.length > 0) {
//     changelogEntry += "### Features\n\n";
//     groups.feat.forEach((item) => (changelogEntry += `- ${item}\n`));
//   }

//   if (groups.fix.length > 0) {
//     changelogEntry += "### Fixes\n\n";
//     groups.fix.forEach((item) => (changelogEntry += `- ${item}\n`));
//   }

//   if (groups.other.length > 0) {
//     changelogEntry += "### Other Changes\n\n";
//     groups.other.forEach((item) => (changelogEntry += `- ${item}\n`));
//   }

//   return changelogEntry;
// };
// module.exports = {
//   getReleaseLine,
//   getDependencyReleaseLine
// }
// module.exports = {
//   default: function (changeset, options) {
//     const { summary, commit, releases } = changeset;

//     // 固定的头部信息
//     let changelogEntry = `# ${releases[0].name}\n\n`;
//     changelogEntry += "This project follows semantic versioning.\n\n";
//     changelogEntry += "## Changes\n\n";

//     // 变更描述
//     changelogEntry += `- ${summary}\n`;

//     if (commit) {
//       changelogEntry += `\n**Commit:** ${commit}\n`;
//     }

//     return changelogEntry;
//   }
// }