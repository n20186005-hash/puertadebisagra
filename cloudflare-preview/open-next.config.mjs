import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// This static visitor site does not use ISR, on-demand revalidation or remote caches.
export default defineCloudflareConfig();
