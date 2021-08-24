interface Iconfig {
  baseUrl: {
    preproduction: string;
    www: string;
    dev: string
  }
}

export const config:Iconfig = {
  baseUrl: {
    preproduction: 'preproduction.mhealth100.com',
    www: 'www.mhealth100.com',
    dev: 'development.mhealth100.com'
  }
}