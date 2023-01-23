async function getPRFileData(github, context) {   
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

async function createLabelsForPR(github, context) {
    var labels = []

    await getPRFileData(github, context).then((data) => {
        console.log(data)
    
        data.data.forEach((file) => {
            console.log('================')
            console.log(file)
            if (file.status === 'added') {
                addLabelToList(labels, 'kind/new')
            }
            else if (file.status === 'modified' && file.deletions === 0 && file.additions > 0) {
                addLabelToList(labels, 'kind/improvement')
            }
        })

        console.log('createLabelsForPR end: ', labels)
    })

    console.log('createLabelsForPR return: ', labels)

    return labels
}

function addLabelsToPR(github, context, labels) {
    console.log('addLabelsToPR: ', labels)

    if (labels.length === 0) {
        return
    }

    const res = github.request('POST /repos/{owner}/{repo}/issues/{issue_number}/labels', {
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.issue.number,
        labels: labels
    })

    console.log(res)
}

export default async ({github, context}) => {
    addLabelsToPR(github, context, await createLabelsForPR(github, context))
}
