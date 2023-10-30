// Recursion to print John's children and his grandchildrens, great grandchildrens

const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                {
                    name: 'Kyle',
                    children: [
                        {
                            name: 'Mike',
                            children: [
                                {
                                    name: 'Todd',
                                    children: []
                                },
                                {
                                    name: 'Andy',
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Sophia',
                    children: []
                }
            ]
        }
    ]
}

const printChildrenRecursive = (t) => {
    // return and exit if no children
    if (t.children.length <= 0) {
        return;
    }

    t.children.forEach(child => {
        console.log(child.name);
        // run the recursion function deeper
        printChildrenRecursive(child);
    })
}


console.log(printChildrenRecursive(tree));