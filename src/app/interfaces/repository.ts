export interface Repository {
    name: string;
    url: string;
}

export interface RepositoryResults {
    url: string;
    description: string;
    date: string;
    commits: number
}