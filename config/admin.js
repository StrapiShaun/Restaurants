module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '20c0c117a84587f4cc74b5c430eb61cc'),
  },
});
