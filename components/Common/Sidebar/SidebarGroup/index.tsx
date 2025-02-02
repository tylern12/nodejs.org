import type { ComponentProps, FC } from 'react';

import SidebarItem from '@/components/Common/Sidebar/SidebarItem';
import type { FormattedMessage } from '@/types';

import styles from './index.module.css';

type SidebarGroupProps = {
  groupName: FormattedMessage;
  items: ComponentProps<typeof SidebarItem>[];
};

const SidebarGroup: FC<SidebarGroupProps> = ({ groupName, items }) => (
  <section className={styles.group}>
    <label className={styles.groupName}>{groupName}</label>
    <ul className={styles.itemList}>
      {items.map(({ title, url }) => (
        <SidebarItem key={url} title={title} url={url} />
      ))}
    </ul>
  </section>
);

export default SidebarGroup;
