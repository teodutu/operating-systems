function getPRFileData(github, context) {   
    return github.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/files', {
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: context.issue.number
    })
}

function addLabelToList(labels, label) {
    if (!labels.includes(label)) {
        labels.push(label)
    }
}

function createLabelsForPR(github, context) {
    getPRFileData(github, context).then((data) => {
        var labels = []

        data.data.forEach((file) => {
            if (file.status === 'added') {
                addLabelToList(labels, 'kind/new')
            }
            else if (file.status === 'modified' && file.deletions == 0 && file.additions > 0) {
                addLabelToList(labels, 'kind/improvement')
            }
        })

        return labels
    })
}

function addLabelsToPR(github, labels) {
    github.request('POST /repos/{owner}/{repo}/issues/{issue_number}/labels', {
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.issue.number,
        labels: labels
    })
}

export default ({github, context}) => {
    addLabelsToPR(github, context, createLabelsForPR(github, context))
}
