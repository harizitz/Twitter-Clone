import { User } from '../user-class/user';

export class Tweet {
  tweet_id!: number;
  tweet!: string;
  user!: User;
  reply: any[];
}
