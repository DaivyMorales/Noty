import { useRouter } from "next/router";

export default function AuthRedirectPage() {
  const router = useRouter();
  const { code } = router.query;
}