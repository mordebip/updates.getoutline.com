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
