import { Exercise } from '../exercise';
import { Tabs, TabsProps, Container } from '@mantine/core';
import { IconJumpRope, IconMap2, IconBarbell } from '@tabler/icons';
import { useState } from 'react' 
import './calisthenics.css'
import { Locations } from '../locations';
import { Equipment } from '../equipment';

function StyledTabs(props: TabsProps) {
  
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}`,
          padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          display: 'flex',
          alignItems: 'center',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7],
            color: theme.white,
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
        },
      })}
      {...props}
    />
  );
}



export function Calisthenics() {
  const [activeTab, setActiveTab] = useState<string | null>('Training');
  return (
    
    <Container style={{ marginTop: "30vh"}} my="xs">
    
      <StyledTabs value={activeTab} onTabChange={setActiveTab}>
      <div id="TabPillWrapper">
        <Tabs.List >
          <Tabs.Tab value="Training" icon={<IconBarbell size={30} />} className="TabPill">
          Training
          </Tabs.Tab>
          <Tabs.Tab value="Equipment" icon={<IconJumpRope size={30} />} className="TabPill">
          Equipment
          </Tabs.Tab>
          <Tabs.Tab value="Locations" icon={<IconMap2 size={30} />} className="TabPill">
          Locations
          </Tabs.Tab>
        </Tabs.List>
        </div>

        <Tabs.Panel value="Training" pt="xs">
        <Exercise />
      </Tabs.Panel>

      <Tabs.Panel value="Equipment" pt="xs">
        <Equipment/>
      </Tabs.Panel>

      <Tabs.Panel value="Locations" pt="xs">
        <Locations/>
      </Tabs.Panel>

      </StyledTabs>

    </Container>
  );
}
