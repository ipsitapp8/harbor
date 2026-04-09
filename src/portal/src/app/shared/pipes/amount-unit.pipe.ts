// Copyright Project Harbor Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'amountUnit',
})
export class AmountUnitPipe implements PipeTransform {
    /**
     * Transform the value with units.
     * For example, convert bandwidth from KB to MB if necessary.
     * Currently a simple implementation to satisfy the UI requirement.
     */
    transform(value: any, fromUnit: string, toUnit: string): string {
        if (value === null || value === undefined || value === '') {
            return '';
        }

        // Handle unlimited
        if (value === -1 || value === '-1') {
            return '';
        }

        return `${value}${toUnit}`;
    }
}
