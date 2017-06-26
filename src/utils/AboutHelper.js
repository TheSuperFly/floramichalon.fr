import * as about from 'Data/about.json';

class AboutHelper {
  static getBiography() {
    return about.biography;
  }

  static getEmailAdress() {
    return about.email;
  }

  static getResumeePath() {
    return about.resumee;
  }

  static getSocialLinks(featured = false) {
    if (featured) {
      return about.social.filter(item => (
        item.featured === true
      ));
    }

    return about.social;
  }
}

export default AboutHelper;
