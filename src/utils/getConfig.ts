import * as vscode from 'vscode';

// CONFIG: this should match the contribution in package.json
type ConfigItems =
  | 'rgOptions'
  | 'addSrcPaths'
  | 'rgGlobExcludes'
  | 'rgMenuActions'
  | 'rgQueryParams'
  | 'rgQueryParamsShowTitle'
  | 'rgPath'
  | 'startFolderDisplayDepth'
  | 'startFolderDisplayIndex'
  | 'endFolderDisplayDepth'
  | 'alwaysShowRgMenuActions'
  | 'showPreviousResultsWhenNoMatches'
  | 'gotoRgMenuActionsPrefix'
  | 'enableGotoNativeSearch'
  | 'gotoNativeSearchSuffix'
  | 'peekBorderColor'
  | 'peekBorderWidth'
  | 'peekBorderStyle';

export function getConfig() {
  const vsConfig = vscode.workspace.getConfiguration('periscope');

  return {
    rgOptions: vsConfig.get<string[]>('rgOptions', ['--smart-case', '--sortr path']),
    addSrcPaths: vsConfig.get<string[]>('addSrcPaths', []),
    rgGlobExcludes: vsConfig.get<string[]>('rgGlobExcludes', []),
    rgMenuActions: vsConfig.get<{ label?: string; value: string }[]>('rgMenuActions', []),
    rgQueryParams: vsConfig.get<{ param?: string; regex: string }[]>('rgQueryParams', []),
    rgQueryParamsShowTitle: vsConfig.get<boolean>('rgQueryParamsShowTitle', true),
    rgPath: vsConfig.get<string | undefined>('rgPath', undefined),
    startFolderDisplayIndex: vsConfig.get<number>('startFolderDisplayIndex', 0),
    startFolderDisplayDepth: vsConfig.get<number>('startFolderDisplayDepth', 1),
    endFolderDisplayDepth: vsConfig.get<number>('endFolderDisplayDepth', 4),
    alwaysShowRgMenuActions: vsConfig.get<boolean>('alwaysShowRgMenuActions', true),
    showPreviousResultsWhenNoMatches: vsConfig.get<boolean>('showPreviousResultsWhenNoMatches', false),
    gotoRgMenuActionsPrefix: vsConfig.get<string>('gotoRgMenuActionsPrefix', '<<') || '<<',
    enableGotoNativeSearch: vsConfig.get<boolean>('enableGotoNativeSearch', true),
    gotoNativeSearchSuffix: vsConfig.get<string>('gotoNativeSearchSuffix', '>>') || '>>',
    peekBorderColor: vsConfig.get<string>('peekBorderColor', 'rgb(150,200,200)'),
    peekBorderWidth: vsConfig.get<string>('peekBorderWidth', '2px'),
    peekBorderStyle: vsConfig.get<string>('peekBorderStyle', 'solid'),
  } as const satisfies { [key in ConfigItems]: unknown };
}
