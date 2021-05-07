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
        "@semantic-release/git"
    ],
    "preset": "angular"
}
