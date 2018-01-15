# updates.getoutline.com

Simple `micro` service for collecting Outline analytics and serving updates.

Soft notification format:

```json
{
  "severity": "update",
  "message": "New version (12.0) of Outline available for install",
  "url": "https://github.com/outline/outline"
}
```

A must upgrade:

```json
{
  "severity": "critical",
  "message": "New version (12.0) of Outline available with critical security updates",
  "url": "https://github.com/outline/outline"
}
```

## Installation

This service has no dependencies.

1. Copy the file `.env.sample` to `.env` and fill out the Google Analytics ID.
1. Run `yarn install`. This will download dependencies
1. Run `yarn start`.
