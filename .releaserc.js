module.exports = {
    release: {
        branches: ['master', {"name": "beta", "prerelease": true}]
    },
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/github", {
            "assets": ["dist/**"]
        }],
        ["@semantic-release/git", {
            "assets": ["package.json"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }]
    ],
    "preset": "angular"
}
