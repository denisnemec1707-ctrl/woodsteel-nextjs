import ContentPage from "@/components/ContentPage";
import { PAGES } from "@/lib/content";
import { makeMetadata } from "@/lib/seo";
const P = "/zimne-zahrady/drevene-zimne-zahrady/";
const d = PAGES[P];
export const metadata = makeMetadata(P, { title: d.metaTitle, description: d.metaDesc });
export default function Page() {
  return <ContentPage data={d} />;
}
