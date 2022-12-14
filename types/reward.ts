export interface Reward {
    title: string;
    description: string;
    eligibleActual: number;
    cap: number;
    active: boolean;
    type: string;
    project: string;
    tokenName: string;
    tokenAddress: string;
    tokenContract: string;
    tokenAmount: number;
    amount: number;
    requiredPledge: string;
    nftId: number;
    rType: number;
    rewardType: number;
    rewardId: number;
    donors: object;
    owner: string;
    updatedAt: string;
    createdAt: string;
    chainId: number;
    objectId: string;
    delivery: string;
    estimation: string;
  }
  