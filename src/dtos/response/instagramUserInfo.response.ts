export class InstagramUserInfoResponseDto {
  data: {
    id: string,
    username: string,
    full_name: string,
    profile_picture: string,
    bio: string,
    website: string,
    is_business: boolean,
    counts: {
      media: number,
      follows: number,
      followed_by: number
    };
  }
}