"use client";

import { Store } from "@prisma/client";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

import { PopoverTrigger } from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwticherProps extends PopoverTriggerProps {
  items: Store[];
}

const StoreSwticher = ({ className, items = [] }: StoreSwticherProps) => {
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items?.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const current = formattedItems.find((item) => item.value === params.storeId);

  return <div>Store Switcher</div>;
};

export default StoreSwticher;
