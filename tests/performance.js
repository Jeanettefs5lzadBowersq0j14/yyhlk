import http from 'k6/http';\nimport { sleep } = 'k6';\n\nexport default function () {\n  http.get('http://test.k6.io');\n  sleep(1);\n}
