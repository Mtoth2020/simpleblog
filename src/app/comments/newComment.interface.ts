export interface newComment {
    firstName: string,
    lastName: string,
    email: string,
    comment: string
}

export interface commentToSave {
    postId: number,
    name: string,
    email: string,
    body: string
}